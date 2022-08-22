pipeline {

  environment {
    dockerimagename = "hustchihieu/customer_app:lts"
    dockerImage = ""
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
          dockerImage = docker.build dockerimagename
          docker.build("hustchihieu/customer_app:lts", "-f server/Dockerfile server")
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
            dockerImage.push("lts")
            sh 'docker tag hustchihieu/customer_app:lts hustchihieu/customer_app:lts'
            sh 'echo "chihieu123" | docker login -u hustchihieu --password-stdin'
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          sh 'kubectl get pod'
          kubernetesDeploy(configs: "k8s-config/customer/customer.deployment.yaml", kubeconfigId: "myconfigk8s")
        }
      }
    }
  }

}