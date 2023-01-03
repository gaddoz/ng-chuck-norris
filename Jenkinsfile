pipeline {

   agent any

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
