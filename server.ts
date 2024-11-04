import app from './src/app';
import connectToDatabase from './src/db/connect';

const port = process.env.PORT || 3000;

// Connect to MongoDB and start the server
connectToDatabase()
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    console.error('Failed to start server:', err);
  });
