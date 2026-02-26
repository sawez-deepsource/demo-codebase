// === v3 DIFF TEST round 2 — multi-framework violations ===

// no-var, eqeqeq, no-eval
export function unsafeHandler(req: any) {
  var body = req.body
  if (body == null) return { error: 'empty' }
  var parsed = eval('(' + body + ')')
  return parsed
}

// no-console, prefer-const
export function processQueue(items: any[]) {
  let count = items.length
  let label = 'processing'
  console.log(label, count)
  for (let item of items) {
    console.warn('item:', item)
  }
  return count
}

// no-prototype-builtins, prefer-template, dot-notation
export function formatRecord(record: any) {
  const exists = record.hasOwnProperty('id')
  const display = 'Record #' + record['id'] + ' - ' + record['name']
  return { exists, display }
}

// no-new-wrappers, no-proto
export function legacyCompat(obj: any) {
  const s = new String(obj.label)
  const n = new Number(obj.count)
  const parent = obj.__proto__
  return { s: s.valueOf(), n: n.valueOf(), parent }
}

// yoda, no-debugger, no-alert
export function debugCheck(status: string) {
  if ('active' === status) {
    debugger
    alert('active session detected')
  }
  if ('error' === status) {
    alert('error state')
  }
  return status
}

// no-empty-function
export class StubService {
  connect() {}
  disconnect() {}
  onMessage() {}
}

// no-extend-native, no-sequences
export function hackGlobals() {
  Object.prototype.inspect = function() { return String(this) }
  var x = (1, 2, 3)
  return x
}
