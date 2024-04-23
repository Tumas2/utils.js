// Source:
// https://www.youtube.com/watch?v=hubQQ3F337A

// Converts Maps/Sets into JSON 
JSON.stringifyMap = function (value, space) {
    return JSON.stringify(value,
        (key, value) => {
            if (value instanceof Map)
                return Object.fromEntries(value)
            if (value instanceof Set)
                return Array.from(value)
            return value
        }, space)
}

// Converts JSON into Maps/Sets 
JSON.parseMap = function (value) {
    return JSON.parse(value,
        (key, value) => {
            if (Array.isArray(value))
                return new Set(value)
            if (value && typeof value === 'object')
                return new Map(Object.entries(value))
            return value
        })
}
