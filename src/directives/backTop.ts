import type {DirectiveBinding} from 'vue';
export default {
    mounted(el:HTMLElement,binding:DirectiveBinding){
        const clickHandler = ()=>{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });
        };
        
        const scrollHandler = ()=>{
            if(document.documentElement.scrollTop > binding.value){
                el.style.display = 'flex';
            }else{
                el.style.display = 'none';
            }
        };
        
        el.addEventListener('click', clickHandler);
        window.addEventListener('scroll', scrollHandler);
        
        // Store handlers for cleanup
        (el as any)._clickHandler = clickHandler;
        (el as any)._scrollHandler = scrollHandler;
    },
    
    unmounted(el:HTMLElement){
        // Remove event listeners
        if((el as any)._clickHandler){
            el.removeEventListener('click', (el as any)._clickHandler);
        }
        if((el as any)._scrollHandler){
            window.removeEventListener('scroll', (el as any)._scrollHandler);
        }
        
        // Clean up references
        delete (el as any)._clickHandler;
        delete (el as any)._scrollHandler;
    }
}