class PowerUps {
    constructor(scene) {
        this.scene = scene;
        this.powerUps = this.scene.physics.add.group();
    }

    spawnPowerUp() {
        let powerUp = this.powerUps.create(800, 350, 'powerup');
        powerUp.setVelocityX(-200);
        powerUp.setGravityY(0);
        this.scene.physics.add.collider(this.scene.player, powerUp, this.collectPowerUp, null, this);
    }

    collectPowerUp(player, powerUp) {
        powerUp.destroy();
        // להוסיף שדרוג לשחקן (כמו עמידות למכשול)
    }
}
