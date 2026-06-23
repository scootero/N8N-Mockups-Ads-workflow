const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/', (req, res) => {
  res.json({
      status: 'ok',
          message: 'N8N Mockups Ads Workflow API is running',
              timestamp: new Date().toISOString()
                });
                });

                // N8n Webhook Endpoint - For receiving data from N8n
                app.post('/webhook/mockup', (req, res) => {
                  try {
                      const { data } = req.body;

                              // Process the incoming webhook data
                                  console.log('Received webhook data:', data);

                                          // Return success response
                                              res.status(200).json({
                                                    success: true,
                                                          message: 'Webhook received successfully',
                                                                receivedAt: new Date().toISOString(),
                                                                      data: data
                                                                          });
                                                                            } catch (error) {
                                                                                console.error('Error processing webhook:', error);
                                                                                    res.status(500).json({
                                                                                          success: false,
                                                                                                error: error.message
                                                                                                    });
                                                                                                      }
                                                                                                      });
                                                                                                      
                                                                                                      // API Endpoint for testing
                                                                                                      app.get('/api/test', (req, res) => {
                                                                                                        res.json({
                                                                                                            message: 'N8N Mockups Workflow Test',
                                                                                                                endpoint: 'This is a test endpoint for your N8n workflow integration'
                                                                                                                  });
                                                                                                                  });
                                                                                                                  
                                                                                                                  // Error handling middleware
                                                                                                                  app.use((err, req, res, next) => {
                                                                                                                    console.error('Error:', err);
                                                                                                                      res.status(500).json({
                                                                                                                          error: 'Internal Server Error',
                                                                                                                              message: err.message
                                                                                                                                });
                                                                                                                                });
                                                                                                                                
                                                                                                                                // Start server
                                                                                                                                if (require.main === module) {
                                                                                                                                  app.listen(PORT, () => {
                                                                                                                                      console.log(`Server running on port ${PORT}`);
                                                                                                                                          console.log(`Webhook endpoint: POST /webhook/mockup`);
                                                                                                                                            });
                                                                                                                                            }
                                                                                                                                            
                                                                                                                                            module.exports = app;
