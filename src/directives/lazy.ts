import type {DirectiveBinding} from 'vue';
export const lazyLoad = {
    // user 
    mounted(el:HTMLElement,binding:DirectiveBinding){
        el.setAttribute('src','/logo.png');
        const options = {
            rootMargin:'0px',
        }
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    el.setAttribute('src',binding.value);
                    observer.unobserve(el);
                }
            })
        },options);
        observer.observe(el);
    }
}