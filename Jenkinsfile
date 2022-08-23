pipeline {

  environment {
    dockerimagename = "hustchihieu/customer_app:lts"
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/hustchihieu143/k8s'
      }
    }

    stage('Build image') {
      steps{
        script {
          myapp = docker.build("hustchihieu/customer_app:latest", "-f server/Dockerfile server")
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhublogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            sh 'echo "chihieu123" | docker login -u hustchihieu --password-stdin'
            myapp.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          sh 'kubectl get pod'
          kubernetesDeploy(configs: "k8s-config/customer/customer.deployment.yaml", kubeconfigId: "myconfigk8s", enableConfigSubstitution: true)
        }
      }
    }
  }

}