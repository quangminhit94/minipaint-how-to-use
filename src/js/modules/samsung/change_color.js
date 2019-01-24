import config from '../../config.js';
import GUI_details_class from '../../core/gui/gui-details';

class Change_color_class {
  constructor() {
    // add lib to change color here
    this.GUI_details_class = new GUI_details_class;
  }

  setup() {
    
  }

  printMgs1() {
    alert('this can be found at base-gui -> gui-menu')
  }

  change_color() {
    // this.GUI_details_class.render_color(true)
    // this.GUI_details_class.render_details(true);
    var value = '#42a5f5';
    config.layer.color = value;
		config.need_render = true;

    alert('color has changed')
  }

  pick_color() {
    var $samsungTool = document.getElementById('samsung_color');
    $samsungTool.addEventListener('change', function (e) {
      var value = this.value;
      config.layer.color = value;
      config.need_render = true;

      alert('color has changed')
    })
  }
  
  pick(color='black') {
    var value = this.value;
    config.layer.color = value || color;
    config.need_render = true;
  }
}


export default Change_color_class;