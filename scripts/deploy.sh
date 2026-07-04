#!/bin/bash

echo "======================================"
echo "Deploying to Render..."
echo "======================================"

curl -X POST "$RENDER_DEPLOY_HOOK"

echo "Deployment request sent successfully."