function toggleSidebar() {
    const aside = document.querySelector("aside") as HTMLElement;
    aside.classList.toggle("no-show");
    const burger = document.querySelector("#drawer") as HTMLElement;
    burger.classList.toggle("no-show");
}
