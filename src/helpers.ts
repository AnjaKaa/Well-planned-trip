export function objectToArray<T>(obj: Record<string, T>): Array<T> {
  return Object.keys(obj)?.map(
    key => obj[key]
  )
}