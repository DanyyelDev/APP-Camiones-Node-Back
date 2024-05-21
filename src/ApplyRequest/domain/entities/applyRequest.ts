export interface ApplyRequest {
    idRequest: number
    location: string
    cargoCapacity: number
    status: 'AVAILABLE' | 'UNAVAILABLE'
}

export class ApplyRequest implements ApplyRequest {
    constructor(public readonly applyRequest: ApplyRequest) {
        this.idRequest = applyRequest.idRequest;
        this.location = applyRequest.location;
        this.cargoCapacity = applyRequest.cargoCapacity;
        this.status = applyRequest.status;
    }
}