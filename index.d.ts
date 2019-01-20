// Definitions by: Aner Shab
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {

    interface Marker {
        // initialize(latlngs: L.LatLng[], durations: number[], options: any): this;

        isRunning(): boolean;
        isEnded(): boolean;
        isStarted(): boolean;
        isPaused(): boolean;

        start(): void;
        resume(): void;
        pause(): void;
        stop(): void;

        addLatLng(latlng: L.LatLng, duration: number): void;
        moveTo(latlng: L.LatLng, duration: number): void;
        addStation(pointIndex: number, duration: number): void;        
        /**
         * Sets the rotation origin value.
         */
        setRotationOrigin(newOrigin: string): this;
    }
}
