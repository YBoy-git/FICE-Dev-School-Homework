class PaginationHelper {
    #content = [];
    #pageCapacity = 0;

    constructor(collection, itemsPerPage) {
        this.#content = collection;
        this.#pageCapacity = itemsPerPage;
    }

    isPageIndexCorrect(page) {
        return page >= 0 && page < this.pageCount();
    }

    itemCount() {
        return this.#content.length;
    }
    pageCount() {
        return Math.ceil(this.#content.length / this.#pageCapacity);
    }
    pageItemCount(pageIndex) {
        if (!this.isPageIndexCorrect(pageIndex)) {
            return -1;
        }

        return pageIndex === this.pageCount() - 1
            ? this.#content.length - pageIndex * this.#pageCapacity
            : this.#pageCapacity;
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.#content.length) {
            return -1;
        }
        return Math.floor(itemIndex / this.#pageCapacity);
    }
}
