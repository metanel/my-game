class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.spritesheet('player', 'https://via.placeholder.com/80x40', { frameWidth: 40, frameHeight: 40 });
        this.load.image('ground', 'https://via.placeholder.com/800x50');
    }

    create() {
        // יצירת קרקע
        this.ground = this.physics.add.staticGroup();
        this.ground.create(400, 380, 'ground');

        // יצירת דמות ראשית
        this.player = this.physics.add.sprite(100, 300, 'player');
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.ground);

        // יצירת אנימציה לדמות (הדמיה של ריצה)
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });
        this.player.play('run');

        // הצגת חיסכון וזמן
        this.score = 0;
        this.month = 3;
        this.year = 2025;
        this.scoreText = this.add.text(16, 16, '₪0 - 03/2025', { fontSize: '32px', fill: '#fff' });
        this.lastUpdateTime = 0;
        this.updateInterval = 300000; // 5 דקות = 300,000 מילי-שניות

        // הגדרת לחיצת מקש רווח לקפיצה
        this.jumpKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(time) {
        if (time - this.lastUpdateTime >= this.updateInterval) {
            this.score += 5000;
            this.month++;
            if (this.month > 12) {
                this.month = 1;
                this.year++;
            }
            this.scoreText.setText('₪' + this.score + ' - ' + (this.month < 10 ? '0' : '') + this.month + '/' + this.year);
            this.lastUpdateTime = time;
        }

        // קפיצה עם מקש רווח
        if (Phaser.Input.Keyboard.JustDown(this.jumpKey) && this.player.body.touching.down) {
            this.player.setVelocityY(-250);
        }
    }
}
