import capitalize from 'lodash-es/capitalize'

export const hello = (event, context, callback) => {
  const message = `My new lambda function ${capitalize('everybody')}!1!`

  callback(null, { message, event });
}
