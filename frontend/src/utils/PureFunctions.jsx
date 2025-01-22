const FilterShowsBasedOnPoster = (file) => {
    
    if (!Array.isArray(file)) return [];

    return [...file].sort((a, b) => {

        if (a['poster'] !== null && b['poster'] === null) return -1 //  a, b
        if (a['poster'] === null && b['poster'] !== null) return 1 // b, a
        return 0;

    }) 

}



const isDevToolOpen = () => {
    const start = performance.now();
    console.log("Checking Dev Tools.....");
    const end = performance.now();
    return end - start > 50;
    
}



export {FilterShowsBasedOnPoster, isDevToolOpen}