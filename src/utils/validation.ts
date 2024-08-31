export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password: string): boolean => {
    // Password must be at least 8 characters long and contain at least one number
    return password.length >= 8 && /\d/.test(password);
  };
  