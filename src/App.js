import React from 'react';
import Data from './component/Wine-Data';
function App() {
  return (
    <>
 <div>
      <h1>Wine List</h1>
      <table>
        <thead>
          <tr>
            <th>Alcohol</th>
            <th>Malic Acid</th>
            <th>Ash</th>
            <th>Alcalinity of ash</th>
            <th>Acidity</th>
            <th>Magnesium</th>
            <th>Total phenols</th>
            <th>Flavanoids</th>
            <th>Nonflavanoid phenols</th>
            <th>Proanthocyanins</th>
            <th>Color intensity</th>
            <th>Hue</th>
            <th>OD280/OD315 of diluted wines</th>
            <th>Unknown</th>

          </tr>
        </thead>
        <tbody>
          {Data.map((wine) => (
            <tr key={wine.Alcohol}>
              <td>{wine.Alcohol}</td>
              <td>{wine['Malic Acid']}</td>
              <td>{wine.Ash}</td>
              <td>{wine['Alcalinity of ash']}</td>
              <td>{wine.Magnesium}</td>
              <td>{wine['Total phenols']}</td>
              <td>{wine.Flavanoids}</td>
              <td>{wine['Nonflavanoid phenols']}</td>
              <td>{wine.Proanthocyanins}</td>
              <td>{wine['Color intensity']}</td>
              <td>{wine.Hue}</td>
              <td>{wine['OD280/OD315 of diluted wines']}</td>
              <td>{wine.Unknown}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    );
}

export default App;
