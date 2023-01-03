pipeline {

   agent any

   tools {
      nodejs "node-16.13.0"
   }

   stages {

      stage('SCM Check for changes') {
            steps {
               scmSkip(deleteBuild: true, skipPattern:'.*\\[ci skip\\].*')
            }
      }

      stage('Install') {
         steps {
            sh "yarn cache clean && yarn install --frozen-lockfile"
         }
      }

      stage('Build') {
         steps {
            sh "yarn build"
         }
      }

      stage('E2E') {
         steps {
            sh "export ELECTRON_RUN_AS_NODE=1 && yarn e2e"
         }
      }
      
   }
   post {
       always {
            cleanWs()
        }
    }
}
