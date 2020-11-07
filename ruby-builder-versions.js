export function getVersions(platform) {
  const versions = {
    "ruby": [
      "2.1.9",
      "2.2.10",
      "2.3.0", "2.3.1", "2.3.2", "2.3.3", "2.3.4", "2.3.5", "2.3.6", "2.3.7", "2.3.8",
      "2.4.0", "2.4.1", "2.4.2", "2.4.3", "2.4.4", "2.4.5", "2.4.6", "2.4.7", "2.4.9", "2.4.10",
      "2.5.0", "2.5.1", "2.5.2", "2.5.3", "2.5.4", "2.5.5", "2.5.6", "2.5.7", "2.5.8",
      "2.6.0", "2.6.1", "2.6.2", "2.6.3", "2.6.4", "2.6.5", "2.6.6",
      "2.7.0", "2.7.1", "2.7.2",
      "head", "debug",
    ],
    "jruby": [
      "9.1.17.0",
      "9.2.9.0", "9.2.10.0", "9.2.11.0", "9.2.11.1", "9.2.12.0", "9.2.13.0",
      "head"
    ],
    "truffleruby": [
      "19.3.0", "19.3.1",
      "20.0.0", "20.1.0", "20.2.0",
      "head"
    ]
  }

  return versions
}
