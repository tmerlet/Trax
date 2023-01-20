import fetcher from './fetcher'

export const auth = (
  mode: 'singin' | 'signup',
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body)
}
