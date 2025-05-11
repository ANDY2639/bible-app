/* eslint-disable @typescript-eslint/no-explicit-any */
export default class APIError extends Error {
  status: number
  type: string
  redirect: boolean
  details: any

  constructor(message: string, status: number, redirect?: boolean, details?: any) {
    super(message)
    this.status = status
    this.type = status >= 400 && status < 500 ? 'warning' : 'danger'
    this.redirect = !!redirect
    this.details = details
    Object.setPrototypeOf(this, APIError.prototype)
  }

  public getMessage() {
    let formattedMessage = this.message
    const parseDetails = JSON.parse(this.details)
    const pluralize = parseDetails.ValidAttempts > 1 ? 'intentos' : 'intento'
    Object.entries({ ...parseDetails, pluralize }).forEach((attibute: any[]) => {
      formattedMessage = formattedMessage.replace(new RegExp(attibute[0], 'g'), attibute[1])
    })
    return formattedMessage
  }
}
