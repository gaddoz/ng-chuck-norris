pipeline {

   agent any

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
            sh "yarn install --frozen-lockfile"
         }
      }

      stage('Build') {
         steps {
            sh "yarn build"
         }
      }
      
   }
   post {
       always {
            cleanWs()
        }
    }
}
