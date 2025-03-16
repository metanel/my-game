class Obstacles {
    constructor(scene) {
        this.scene = scene;
        this.obstacles = this.scene.physics.add.group();
        this.scene.time.addEvent({ delay: 3000, callback: this.spawnObstacle, callbackScope: this, loop: true });
        this.scene.physics.add.collider(this.scene.player, this.obstacles, this.hitObstacle, null, this);
    }

    spawnObstacle() {
        let obstacle = this.obstacles.create(800, 350, 'obstacle');
        obstacle.setVelocityX(-200);
        obstacle.setCollideWorldBounds(false);
        obstacle.setGravityY(0);
        obstacle.setImmovable(true);
    }

    hitObstacle() {
        this.scene.scene.restart();
    }
}
