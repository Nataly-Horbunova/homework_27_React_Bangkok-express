export const api = {
    baseUrl: "http://localhost:3000/",

    async getProducts() {
        const response = await fetch(`${this.baseUrl}products`);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw new Error(`${response.status}. An error occurred. Please try again`);
        }
      },

      async getCarouselProducts() {
        const response = await fetch(`${this.baseUrl}carouselProducts`);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw new Error(`${response.status}. An error occurred. Please try again`);
        }
      },

        async setOrder(order) {
            const headers = new Headers();
            headers.set("Content-Type", "application/json");

            const response = await fetch(`${this.baseUrl}orders`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(order)
            });
            
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(`${response.status}. An error occurred. Please try again`);
            }
      },
}

