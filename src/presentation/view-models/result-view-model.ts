export default class ResultViewModel {
    hasError: boolean
    data: any
    error: string | null

    constructor(hasError: boolean, message: any) {
        if (hasError) {
            this.data = null
            this.error = message
        } else {
            this.data = message
            this.error = null
        }
    }
}
