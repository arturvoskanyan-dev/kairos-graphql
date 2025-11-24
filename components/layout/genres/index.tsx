import GenreSection from './genresSection';

export default function Genres() {
    const genres = ["Action", "Comedy", "Horror"];

    return (
        <div className="flex gap-6">
            {genres.map((genre) => (
                <GenreSection key={genre} genre={genre} />
            ))}
        </div>
    );
}
