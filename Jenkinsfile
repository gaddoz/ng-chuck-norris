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
            sh 'yarn start & npx wait-on http://localhost:4200'
            sh "CYPRESS_API_URL=\"http://ciccio1234/\" npx cy2 run --record --key ng-chuck-norris --parallel --ci-build-id env.BUILD_ID"
         }
      }
      
   }
   post {
       always {
            cleanWs()
        }
    }
}
