class AppError extends Error {
    constructor(public message: string, public statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.name = 'AppError';
    }
  }
  
  export default AppError;
  