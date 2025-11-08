import React from "react";
import { Home } from "lucide-react";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" to="/" icon={Home}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
