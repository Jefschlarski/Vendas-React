export const convertNumberToPrice = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

export const normalize = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};