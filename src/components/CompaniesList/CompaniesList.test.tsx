import { render, waitFor } from "@testing-library/react"

import { CompaniesList } from "./CompaniesList"

const mockGetRequest = jest.fn(() => Promise.resolve([{ name: 'TestCompany', id: 111 }]))

jest.mock('api', () => ({
  api: {
    get: () => mockGetRequest(),
  },
}))

describe('components/CompaniesList', () => {
  it('should render a component and send a GET request to API', async () => {
    render(<CompaniesList />)

    await waitFor(() => expect(mockGetRequest).toHaveBeenCalledTimes(1))
  })
})
