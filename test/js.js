let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2,5,7];
log(...numbers);