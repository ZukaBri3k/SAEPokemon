class Attack {

    static all_attacks = []

    constructor (name, duration, critical_chance, energy_delta, move_id, power, stamina_loss_scaler, type) {
        this.name = name
        this.duration = duration
        this.critical_chance = critical_chance
        this.energy_delta = energy_delta
        this.move_id = move_id
        this.power = power
        this.stamina_loss_scaler = stamina_loss_scaler
        this.type = new Type(type)       
    }

    toString () {
        return `id_pokemon: ${this.id_pokemon}, charged_moves: ${this.charged_moves}, fast_moves: ${this.fast_moves}`
    }
}