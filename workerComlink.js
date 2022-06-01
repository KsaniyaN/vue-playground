// self represents global for the worker
self.addEventListener('message', e => {
    console.log('worker got, ', e);
});