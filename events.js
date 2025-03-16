class Events {
    constructor(scene) {
        this.scene = scene;
    }

    createJobOffer() {
        let offerBox = this.scene.add.rectangle(400, 200, 300, 100, 0x000000).setOrigin(0.5);
        let offerText = this.scene.add.text(320, 180, 'האם אתה רוצה להחליף עבודה?', { fontSize: '18px', fill: '#fff' });
        let yesButton = this.scene.add.text(350, 220, 'כן', { fontSize: '18px', fill: '#ff0000' })
            .setInteractive()
            .on('pointerdown', () => this.scene.scene.restart());
        let noButton = this.scene.add.text(420, 220, 'לא', { fontSize: '18px', fill: '#00ff00' })
            .setInteractive()
            .on('pointerdown', () => {
                offerBox.destroy();
                offerText.destroy();
                yesButton.destroy();
                noButton.destroy();
            });
    }
}
