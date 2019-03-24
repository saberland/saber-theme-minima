import tinydate from 'tinydate'

const format = tinydate('{YYYY}-{MM}-{DD}')

export default date => {
  return (date instanceof Date) ? format(date) : format(new Date(date))
}