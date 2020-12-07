export default {

  bind(element, binding, vnode) {
    
    let current = 0;
    
    element.addEventListener('click', () => {
      
      let increment = binding.value || 90;
      let animate = binding.modifiers.animate;
      let effect;
      
      if(!binding.arg || binding.arg == 'rotate') {
        
        if(binding.modifiers.reverse) current -= increment;
        else current += increment;
        
        
        effect = `scale(${current})`;
      } else if (binding.args == 'scale'){
        effect = `rotate(${current}deg)`;
        
      }
      
      
      element.style.transform = effect;
      if(animate) element.style.transition = `transform 0.5s`;
      
    });
    console.log('diretiva associada: ', element);
  }
}