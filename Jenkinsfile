pipeline {

  environment {
    dockerimagename = "hustchihieu/k8s_app:testing"
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
            dockerImage.push("testing")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "app.deployment.yml", kubeconfigId: "kubernetes")
        }
      }
    }

    stage('run docker file') {
      steps {
        sh 'docker pull hustchihieu/k8s_app:testing'
        sh 'docker stop k8s_app'
        sh 'docker rm k8s_app'
        sh 'docker rmi hustchihieu/k8s_app:testing'
        sh 'docker pull hustchihieu/k8s_app:testing'
        sh 'docker run -d --name k8s_app -p 3002:3000 hustchihieu/k8s_app:testing'
      }
    }

  }

}