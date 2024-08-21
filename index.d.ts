declare const fire: {
    <T>(callback: () => T): Promise<T>;
};

export { fire };