import { useState, useEffect } from 'react';

import { Inter } from 'next/font/google';

import restAPIGetStats from './api/restAPIGetStats';
import restAPISequence from './api/restAPISequence';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // Data
  const [chain, setChain] = useState<string>('');
  const [stats, setStats] = useState<any | null>(null);
  const [error, setError] = useState<any>(null);

  // Control
  const [isAllowedToSave, setIsAllowedToSave] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const [onLoad, setOnLoad] = useState<boolean>(true);

  // Get the stats on load
  useEffect(() => {
    if (onLoad) {
      setOnLoad(false);
      restAPIGetStats()
        .then((statsFromRestAPI) => {
          setStats(statsFromRestAPI);
        })
        .catch((err) => setError(err));
    }
  }, [onLoad]);

  useEffect(() => {
    if (save) {
      restAPISequence(chain)
        .then((_) => {
          setLoad(true);
        })
        .catch((err) => setError(err));

      setChain('');
      setSave(false);
    }
  }, [save]);

  useEffect(() => {
    restAPIGetStats()
      .then((statsFromRestAPI) => {
        setStats(statsFromRestAPI);
        setLoad(false);
      })
      .catch((err) => setError(err));
  }, [load]);

  const onChainUpdate = (event: any) => {
    const newChain = event.target.value;

    let currentIsAllowedToSave = false;
    if (newChain.length > 0) {
      setIsAllowedToSave(true);
      currentIsAllowedToSave = true;
    }

    setChain(newChain);
    setIsAllowedToSave(currentIsAllowedToSave);
  };

  const onSaveChain = () => {
    if (isAllowedToSave) {
      setSave(true);
    }
  };

  // Prepare stats view
  let statsView = (
    <>
      <h2>Stats</h2>
      <div>There is not the stats</div>
    </>
  );

  if (stats) {
    statsView = (
      <div
        className="grid sm:mb-6"
      >
        <h2>Stats</h2>
        <ul>
          <li>
            <div>Chains with sequences:</div>
            <div>{stats.count_sequence_string}</div>
          </li>
          <li>
            <div>Chains without sequences:</div>
            <div>{stats.count_no_sequence_string}</div>
          </li>
        </ul>
      </div>
    );
  }

  // Error view
  let errorView = (
    <div>
      No errors
    </div>
  );
  if (error) {
    errorView = (
      <div>
        {error}
      </div>
    );
  }

  // View
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <div
        className="chain-view"
      >
        <div
          className="flex items-center flex-row place-content-evenly"
        >
          <label>
            chain:
          </label>

          <input
            className="chain"
            onChange={onChainUpdate}
            value={chain}
          />

          <button
            type="button"
            className="action"
            onClick={onSaveChain}
            disabled={!isAllowedToSave}
          >
            save
          </button>
        </div>

        <section
          className="stats"
        >
          {statsView}
        </section>
      </div>

      <div>
        {errorView}
      </div>
    </main>
  );
};
