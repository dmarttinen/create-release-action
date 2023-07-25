import { getBooleanInput, getInput, getMultilineInput } from '@actions/core'

export interface InputParameters {

  apiKey: string
  space: string
  project: string
  releaseNumber: string
  deployTo: string
  progress: boolean
  tenantTag: string
  tenantTags: string[]
  timeout: string
  server: string
  tenant: string
  tenants: string[] 
  forcePackageDownload: boolean 
  cancelOnTimeout: boolean
  channel: string
  configFile: string
  debug: boolean
  deployAt: string
  deploymentCheckSleepCycle: string
  deploymentTimeout: string
  excludeMachines: string
  force: boolean
  guidedFailure: string
  ignoreSslErrors: boolean
  logLevel: string
  noDeployAfter: string
  noRawLog: boolean
  password: string
  proxy: string
  proxyPassword: string
  proxyUsername: string
  rawLogFile: string
  skip: string
  specificMachines: string
  updateVariables: boolean
  username: string
  variable: string
  variables: string[]
  waitForDeployment: boolean
}

export function get(): InputParameters {
  return {
    apiKey: getInput('api_key'),
    space: getInput('space'),
    project: getInput('project'),
    releaseNumber: getInput('release_number'),
    deployTo: getInput('deploy_to'),
    progress: getBooleanInput('progress'),
    server: getInput('server'),
    tenantTag: getInput('tenant_tag'),
    tenantTags: getMultilineInput('tenant_tags').map(p => p.trim()),
    tenant: getInput('tenant'),
    tenants: getMultilineInput('tenants').map(p => p.trim()),
    timeout: getInput('timeout'),
    cancelOnTimeout: getBooleanInput('cancel_on_timeout'),
    channel: getInput('channel'),
    configFile: getInput('config_file'),
    debug: getBooleanInput('debug'),
    deployAt: getInput('deploy_at'),
    deploymentCheckSleepCycle: getInput('deployment_check_sleep_cycle'),
    deploymentTimeout: getInput('deployment_timeout'),
    excludeMachines: getInput('exclude_machines'),
    force: getBooleanInput('force'),
    forcePackageDownload: getBooleanInput('force_package_download'),
    guidedFailure: getInput('guided_failure'),
    ignoreSslErrors: getBooleanInput('ignore_ssl_errors'),
    logLevel: getInput('log_level'),
    noDeployAfter: getInput('no_deploy_after'),
    noRawLog: getBooleanInput('no_raw_log'),
    password: getInput('password'),
    proxy: getInput('proxy'),
    proxyPassword: getInput('proxy_password'),
    proxyUsername: getInput('proxy_username'),
    rawLogFile: getInput('raw_log_file'),
    skip: getInput('skip'),
    specificMachines: getInput('specific_machines'),
    username: getInput('user'),
    updateVariables: getBooleanInput('update_variables'),
    variable: getInput('variable'),
    variables: getMultilineInput('variables').map(p => p.trim()),
    waitForDeployment: getBooleanInput('wait_for_deployment')
  }
}
