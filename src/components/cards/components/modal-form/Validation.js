export const validateStringValue = (value) => {
    console.log("String validation", typeof value === "string" && value !== "")
    return typeof value === "string" && value !== "";
}

export const validateIntValue = (value) => {
    value = parseInt(value)
    console.log("Int value validation", Number.isInteger(value))
    return Number.isInteger(value);
}

export const validateUrl = (value) => {
    const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    console.log("Url validation", httpRegex.test(value))
    return httpRegex.test(value);
}