pipeline {

   agent {
      any
   }

   tools {
      nodejs "node-14.15"
   }

   stages {

      stage('SCM Check for changes') {
            steps {
               scmSkip(deleteBuild: true, skipPattern:'.*\\[ci skip\\].*')
            }
      }

      stage('Install') {
         steps {
            sh "npm ci"
         }
      }

      stage('Build') {
         steps {
            sh "npm run build"
         }
      }
      
   }
   post {
       always {
            cleanWs()
        }
    }
}
