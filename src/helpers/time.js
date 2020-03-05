export default function timeAgo(timestamp) {
    const currentTime = new Date().getTime();
    const givenTime = new Date(timestamp).getTime();
    const timeDiff = currentTime - givenTime;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(timeDiff / 1000 / 60);
    const hours = Math.floor(timeDiff / 1000 / 60 / 60);
    const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    const weeks = Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 7);

    if (weeks > 1) {
        return `${weeks} weeks ago`;
    } else if (days > 1) {
        return `${days} days ago`;
    } else if (hours > 1) {
        return `${hours} hours ago`;
    } else if (minutes > 1) {
        return `${minutes} minutes ago`;
    } else {
        return `${seconds} seconds ago`;
    }
}