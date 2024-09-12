import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { resetPassword } from '../../store/actions/userActions';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  useEffect(() => {
    console.log('Token from URL:', token);
  }, [token]);
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Now use the token in your logic
    console.log("RESET PASSWORD TOKEN:", token);


    if (!newPassword || !token) {
      setError('Password and token are required');
      return;
    }

    try {
        await dispatch(resetPassword(token, newPassword));
        setSuccess(true);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to reset password. Please try again.');
      }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p>{error}</p>}
      {success ? (
        <p>Password reset successful. Please log in with your new password.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
