import * as inputs from '../src/input-parameters'

test('get input parameters', () => {
  const inputParameters = inputs.get()
  expect(inputParameters).toBeDefined()
  expect(inputParameters.tenants).toBeDefined()
  expect(inputParameters.tenants).toHaveLength(2)
  expect(inputParameters.tenants[0]).toBe('Tenants-123')
  expect(inputParameters.tenants[1]).toBe('Tenants-321')
  expect(inputParameters.tenantTags).toBeDefined()
  expect(inputParameters.tenantTags).toHaveLength(2)
  expect(inputParameters.tenantTags[0]).toBe('TenantTags-123')
  expect(inputParameters.tenantTags[1]).toBe('TenantTags-321')
  expect(inputParameters.variables).toBeDefined()
  expect(inputParameters.variables).toHaveLength(2)
  expect(inputParameters.variables[0]).toBe('Variables-123')
  expect(inputParameters.variables[1]).toBe('Variables-321')
})
