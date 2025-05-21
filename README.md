# Simple Flask Greet App

This is a basic Python Flask application that displays a greeting message. The project includes a fully automated CI/CD pipeline using GitHub Actions and Docker.

---

## 🚀 Features

- Python 3.13
- Flask web server
- Dockerized and pushed to DockerHub
- GitHub Actions CI Pipeline:
  - Install dependencies
  - Run unit tests
  - Launch Flask app and verify via curl
  - Docker build and push
  - Email notifications on success/failure

---

## 🛠️ Getting Started

### Prerequisites
- Python 3.13+
- Docker
- GitHub account with access to secrets for:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`
  - `MAIL_USERNAME`
  - `MAIL_PASSWORD`

---

## 🐍 Running Locally

```bash
pip install -r requirements.txt
python app.py
Then open: http://localhost:5000

##🧪 Running Tests
python test_app.py


🐳 Docker
Build and run manually:

docker build -t flask-greet-app .
docker run -p 5000:5000 flask-greet-app

⚙️ GitHub Actions Workflow
The CI/CD workflow performs:

Test execution

App validation using curl

Docker image build and push to DockerHub

Email notifications using SMTP

