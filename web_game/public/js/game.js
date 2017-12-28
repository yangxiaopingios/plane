;(function function_name(game) {

  var domain = '';//资源域名

  /* boot  start */
  var bootState = function(){
    this.preload = function(){
      game.load.image('loading', domain+'/assets/preloader.gif');
    };
    this.create = function(){
      game.state.start('load');
    };
  }
  /* boot   end */

  /* load  start */
  var loadState = function(){
    var progressText;//百分比文字
    this.init = function(){
      //百分比文字
      progressText = game.add.text(game.world.centerX, game.world.centerY + 30,'0%', { fill:'#fff', fontSize:'16px' });
      progressText.anchor = { x:0.5, y:0.5 };
    };
    this.preload = function(){
      //添加图片
      var sprite = game.add.sprite(game.world.centerX-110, game.world.centerY, 'loading');
      game.load.setPreloadSprite(sprite);

      game.load.image('background', domain+'/assets/bg.jpg');
      game.load.image('copyright', domain+'/assets/copyright.png');
      game.load.spritesheet('myplane', domain+'/assets/myplane.png', 40, 40, 4);
      game.load.spritesheet('startbutton', domain+'/assets/startbutton.png', 100, 40, 2);
      game.load.spritesheet('replaybutton', domain+'/assets/replaybutton.png', 80, 30, 2);
      game.load.spritesheet('sharebutton', domain+'/assets/sharebutton.png', 80, 30, 2);
      game.load.image('mybullet', domain+'/assets/mybullet.png');
      game.load.image('bullet', domain+'/assets/bullet.png');
      game.load.image('enemy1', domain+'/assets/enemy1.png');
      game.load.image('enemy2', domain+'/assets/enemy2.png');
      game.load.image('enemy3', domain+'/assets/enemy3.png');
      game.load.spritesheet('explode1', domain+'/assets/explode1.png', 20, 20, 3);
      game.load.spritesheet('explode2', domain+'/assets/explode2.png', 30, 30, 3);
      game.load.spritesheet('explode3', domain+'/assets/explode3.png', 50, 50, 3);
      game.load.spritesheet('myexplode', domain+'/assets/myexplode.png', 40, 40, 3);
      game.load.image('award', domain+'/assets/award.png');
      game.load.audio('normalback', domain+'/assets/normalback.mp3');
      game.load.audio('playback', domain+'/assets/playback.mp3');
      game.load.audio('fashe', domain+'/assets/fashe.mp3');
      game.load.audio('crash1', domain+'/assets/crash1.mp3');
      game.load.audio('crash2', domain+'/assets/crash2.mp3');
      game.load.audio('crash3', domain+'/assets/crash3.mp3');
      game.load.audio('ao', domain+'/assets/ao.mp3');
      game.load.audio('pi', domain+'/assets/pi.mp3');
      game.load.audio('deng', domain+'/assets/deng.mp3');
      game.load.onFileComplete.add(function(progress){
          progressText.text = progress + '%';
      });
    };
    this.create = function(){
      game.state.start('start');
    };
  }
  /* load   end */

  /* start  start */
  var startState = function(){
    this.preload = function(){

    };
    this.create = function(){

    };
    this.update = function(){

    };
  }
  /* start   end */

  /*  添加 state  start*/
  game.state.add('boot', bootState);
  game.state.add('load', loadState);
  game.state.add('start', startState);
  game.state.start('boot');
  /*  添加 state  end*/

})(new Phaser.Game(240,400,Phaser.CANVAS, 'container'));