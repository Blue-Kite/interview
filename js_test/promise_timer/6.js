class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    if (this.cache.has(key)) {
      this.cache.set(key, [value, now + duration]);
      return true;
    }
    this.cache.set(key, [value, now + duration]);
    return false;
  }

  get(key) {
    const now = Date.now();
    if (this.cache.has(key)) {
      const [value, expiry] = this.cache.get(key);
      if (now < expiry) {
        return value;
      } else {
        this.cache.delete(key);
      }
    }
    return -1;
  }

  count() {
    const now = Date.now();
    let count = 0;
    for (const [key, [_, expiry]] of this.cache) {
      if (now < expiry) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }
    return count;
  }
}

// 사용 예시
const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
